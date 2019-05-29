import React,{ Component } from "react";

export default class Pagination extends Component{
  constructor(props){
      super(props)
      // set current page，no.1 by default
      this.state = {
        pageCurr:1,
        groupCount:3,
        startPage:1,
    }
  }

  create(){
    const {
      totalPage,
    } = this.props.config;

    const {
      pageCurr,
    } = this.state;
    const {
      groupCount,
    } = this.state;
    const {
      startPage,
    } = this.state;

    let pages = [];

    if( totalPage <= 10){
      pages.push(<li onClick = { this.goPrev.bind(this) } className = { this.state.pageCurr === 1? 'nomore':"" } key={0}>Previous</li>)
      for(let i = 1;i <= totalPage; i++){
          // call go mether when click specific page，depends on state deciding apply active style
          pages.push(<li onClick = { this.go.bind(this,i) } className = { pageCurr === i ? 'pageactive': "" } key={i}>{i}</li>)
      }
      pages.push(<li onClick = { this.goNext.bind(this) } className = { this.state.pageCurr === totalPage? 'nomore':"" } key={totalPage + 1}>Next</li>)
    }else{
        // previous page
        pages.push(<li className = { this.state.pageCurr === 1? 'nomore':"" } key={ 0 } onClick = { this.goPrev.bind(this) }>Previous</li>)
        for(let i = startPage;i <= groupCount + startPage;i ++){
          if(i <= totalPage - 2){
            pages.push(<li className = { this.state.pageCurr === i? 'pageactive':""} key={i} onClick = { this.go.bind(this,i) }>{i}</li>)
          }
        }
        // ellipsis between pages
        if(totalPage - startPage >= 9){
          pages.push(<li className = 'ellipsis' key={ -1 }>···</li>)
        }
        // last page, second last page
        pages.push(<li className = { this.state.pageCurr === totalPage -1 ? 'pageactive':""} key={ totalPage - 1 } onClick = { this.go.bind(this,totalPage - 1) }>{ totalPage -1 }</li>)
        pages.push(<li className = { this.state.pageCurr === totalPage ? 'pageactive':""} key={ totalPage } onClick = { this.go.bind(this,totalPage) }>{ totalPage }</li>)
        // next page
        pages.push(<li className = { this.state.pageCurr === totalPage ? 'nomore':"" } key={ totalPage + 1 } onClick = { this.goNext.bind(this) }>Next</li>)
    }
    return pages;
  }

  // go back page
  goPrev(){
    let {
      pageCurr,
    } = this.state;
    if(--pageCurr === 0){
      return;
    }
    this.go(pageCurr)
  }

// go foward page
  goNext(){
    let {
      pageCurr,
    } = this.state;
    const {
      totalPage,
    } = this.props.config;
    if(++pageCurr > totalPage){
      return;
    }
    this.go(pageCurr)
  }

  // update state
  go(pageCurr){
    const {
      groupCount
    } = this.state;
    const {
      totalPage,
      paging,
    } = this.props.config
    // deal with next page
    if(pageCurr % groupCount === 1){
      this.setState({
        startPage:pageCurr
      })
    }
    // deal with previous page
    if(pageCurr % groupCount === 0){
      this.setState({
        startPage:pageCurr - groupCount + 1
      })
    }
    // deal with last 2 page startPage
    if(totalPage - pageCurr < 2){
      this.setState({
          startPage:totalPage - groupCount,
      })
    }
    this.setState({
        pageCurr
    })
    setTimeout(()=>{
      paging({
          pageCurr:this.state.pageCurr,
      })
  });
  }

  render(){
    const Pages = this.create.bind(this)();
    return(
      <div className = 'main'>
        <ul className = 'page'>
          { Pages }
        </ul>
      </div>
    );
  }
}