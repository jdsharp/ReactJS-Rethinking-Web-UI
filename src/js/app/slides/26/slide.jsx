/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./soc.md",
    "css!./soc"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="soc" title="Separation of Concerns" markdown={md} />;
       }
    });
});