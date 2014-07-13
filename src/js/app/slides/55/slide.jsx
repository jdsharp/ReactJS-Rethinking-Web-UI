/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            var style = { minHeight: "470px"};
            return <TitledSlide classes="tooling" title="Let's Talk Tooling">
            	<img style={style} className="slide-image" src="js/app/slides/55/docBrown.jpg" />
            </TitledSlide>;
       }
    });
    return Slide;
});