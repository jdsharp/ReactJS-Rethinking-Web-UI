/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="component-api">
                <h2 className="">Integrating in <span className="slide-content-alt">`componentDidMount`</span></h2>
                <iframe
                    width="95%"
                    height="500"
                    src="http://jsfiddle.net/ifandelse/acyPK/5/embedded/result,js" 
                    allowfullscreen="allowfullscreen"
                    frameborder="0"></iframe>
            </TitledSlide>;
       }
    });
    return Slide;
});