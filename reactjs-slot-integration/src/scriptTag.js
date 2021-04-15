import React from 'react'
import { Helmet } from 'react-helmet';

class STag extends React.Component {
	constructor(props) {
	    super(props);
	  }

	componentDidMount () {
		const s = document.createElement('script');
	    s.type = 'text/javascript';
	    s.async = true;
	    s.innerHTML = 'var docCont={content_id:"DOC_11rvfbjkjberzbf", content_sizes:["160 x 600"], click:"DOCEREE_CLICK_URL_UNESC"}; var docereeAds = docereeAds || {}; docereeAds[docCont.content_id] = docCont;';
	    this.instance.appendChild(s);

	    const script = document.createElement("script");
	    script.src = "https://dev-servedbydoceree.doceree.com/resources/d/render.js";
	    script.async = true;
	    this.instance.appendChild(script);
	}

	render() {
		return <div id="DOC_11rvfbjkjberzbf" ref={el => (this.instance = el)}></div>
	}
}

export default STag;
