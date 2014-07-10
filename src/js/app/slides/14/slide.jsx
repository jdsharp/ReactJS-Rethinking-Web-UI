/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./whatif.md",
    "css!./whatif"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="whatif" title="What If..." markdown={md} />;
       }
    });
});