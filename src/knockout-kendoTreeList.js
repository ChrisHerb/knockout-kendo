createBinding({
        name: "kendoTreeList",
        watch: {
            data: function (value, options) {
                ko.kendo.setDataSource(this, value, options);
            }
        },
        events: {
            change: function (options, e) {
                if (ko.isWriteableObservable(options.value)) {
                    var tree = e.sender;
                    options.value(tree.dataItem(tree.select()));
                }
            }
        },
        async: true
})
