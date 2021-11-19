// 列配置类型1
const columnsType1 = [
    {
        key: "a",
        field: "param",
        title: "Parameters",
        width: "10%",
        align: "left",
        type: "expand",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.param}></span>;
        },
    },
    {
        key: "b",
        field: "desc",
        title: "Description",
        width: "60%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.desc}></span>;
        },
    },
    {
        key: "c",
        field: "type",
        title: "Type",
        width: "10%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.type}></span>;
        },
    },
    {
        key: "d",
        field: "optionalVal",
        title: "Optional",
        width: "10%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.optionalVal}></span>;
        },
    },
    {
        key: "e",
        field: "default",
        title: "Default",
        width: "10%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.default}></span>;
        },
    },
];

// 列配置类型2（应用于实例方法）
const columnsType2 = [
    // {
    //     key: "a",
    //     field: "param",
    //     title: "参数",
    //     width: "10%",
    //     align: "left",
    //     type: "expand",
    //     renderBodyCell: ({ row, column, rowIndex }, h) => {
    //         return <span domPropsInnerHTML={row.param}></span>;
    //     },
    // },
    {
        key: "b",
        field: "name",
        title: "Methods Name",
        width: "15%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.name}></span>;
        },
    },
    {
        key: "c",
        field: "desc",
        title: "Description",
        width: "65%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.desc}></span>;
        },
    },
    {
        key: "d",
        field: "param",
        title: "Parameters",
        width: "20%",
        align: "left",
        renderBodyCell: ({ row, column, rowIndex }, h) => {
            return <span domPropsInnerHTML={row.param}></span>;
        },
    },
];

export const db = {
    // table props option
    table: {
        data: [
            {
                param: "tableData",
                desc: "table data",
                type: "<code>Array</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "footerData",
                desc: "Table footer summary data，The data structure is consistent with <code>tableData</code>",
                type: "<code>Array</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "columns",
                desc: `Column configuration. See the following table columns configuration for specific items`,
                type: `<code>Array</code>`,
                optionalVal: "-",
                default: "-",
            },
            {
                param: "fixedHeader",
                desc: "Is the header fixed,Enabled by default.It needs to be used in combination with `maxHeight`",
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "true",
            },
            {
                param: "fixedFooter",
                desc: "Is the fotter fixed,Enabled by default.It needs to be used in combination with `maxHeight`",
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "true",
            },
            {
                param: "scrollWidth",
                desc: "The width of the table's scroll area (the width of the start scroll bar).<code>Number</code>Specify pixels;<code>String</code>Specified percentage",
                type: "<code>Number</code>、<code>String</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "maxHeight",
                desc: "The maximum height of the table.<code>Number</code>Specify pixels;<code>String</code>Specified percentage.",
                type: "<code>Number</code>、<code>String</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "rowKeyFieldName",
                desc: "Specifies the field name of the row key.Used for row expand、row radio、row checkbox、row highlight、virtual scrolling",
                type: "<code>String</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "borderAround",
                desc: "Show table outer border",
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "true",
            },
            {
                param: "borderX",
                desc: "Show column horizontal border",
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "true",
            },
            {
                param: "borderY",
                desc: "Show column vertical border",
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },

            {
                param: "cellSpanOption",
                desc: "Cell merge configuration,Refer to cellSpanOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "cellStyleOption",
                desc: "cell style configuration,Refer to cellStyleOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "rowStyleOption",
                desc: "For row style configuration,Refer to rowStyleOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "expandOption",
                desc: "row expand configuration,Refer to expandOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "checkboxOption",
                desc: "Row multiple selection configuration,Refer to checkboxOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "radioOption",
                desc: "Row radio configuration,Refer to radioOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "virtualScrollOption",
                desc: "Virtual scroll configuration, it is recommended to display more than 1000 rows at a time.Refer to virtualScrollOption configuration for details",
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "sortOption",
                desc: "Sort configuration,Refer to sortOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "cellSelectionOption",
                desc: "Cell selection configuration,Refer to cellSelectionOption configuration for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "editOption",
                desc: "Cell edit configuration,Refer to editOption for details",
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "eventCustomOption",
                desc: `Custom event configuration,Refer to eventCustomOption configuration for details`,
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // columns props
    columns: {
        data: [
            {
                param: "field",
                desc: "The field of the column",
                type: "<code>String</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 0,
            },
            {
                param: "key",
                desc: "Unique key value for each column",
                type: "<code>String</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 5,
            },
            {
                param: "type",
                desc: `Column type. "expand"：row expand；"checkbox"：row checkbox；"radio"：row radio`,
                type: "<code>String</code>",
                optionalVal: `"expand"、"checkbox"、"radio"`,
                default: "-",
                rowKey: 15,
            },
            {
                param: "title",
                desc: "Column header text",
                type: "<code>String</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 20,
            },
            {
                param: "width",
                desc: "<code>Number</code>width pixel value；<code>String</code>width percentage(<a href='#/en/doc/table/column-width?anchor=chang-wen-ben-po-pi-bu-ju'>width not working?</a>)",
                type: `<code>String</code>、<code>Number</code>`,
                optionalVal: "-",
                default: "-",
                rowKey: 25,
            },
            {
                param: "align",
                desc: "Cell alignment",
                type: "<code>String</code>",
                optionalVal: `"left"、"center"、"right"`,
                default: `"center"`,
                rowKey: 30,
            },
            {
                param: "edit",
                desc: "Enable cell edit",
                type: "<code>Boolean</code>",
                optionalVal: `-`,
                default: `"false"`,
                rowKey: 32,
            },
            {
                param: "sortBy",
                desc: `Sort rules.<br>1、<code>sortBy=""</code>：Sorting allowed without collation；<br>2、<code>sortBy="asc"</code>：Default current column ascending；<br>3、<code>sortBy="desc"</code>：Default current column descending；`,
                type: "<code>String</code>",
                optionalVal: `""、"desc"、"asc"`,
                default: `""`,
                rowKey: 31,
            },
            {
                param: "renderBodyCell",
                desc: `1、Custom cell rendering function in the table body. jsx ,Writing is close to template syntax<br>
                2、Parameter information.<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index、<code>h</code>：createElement<br>3、For more JSX knowledge, please refer to<a href="https://vuejs.org/v2/guide/render-function.html#JSX"> Vue.js Official doc</a>`,
                type: `<code>Function({row,column,rowIndex},h):VNode</code>`,
                optionalVal: "-",
                default: "-",
                rowKey: 35,
            },
            {
                param: "renderHeaderCell",
                desc: `1、Header custom cell rendering function.The usage is the same as<code>renderBodyCell</code>。<br>
                2、Parameter information.<code>column</code>:Current column configuration、<code>h</code>：createElement`,
                type: "<code>Function({ column },h):VNode</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 40,
            },
            {
                param: "renderFooterCell",
                desc: `1、footer custom cell rendering function.<br>
                2、Parameter information.<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index、<code>h</code>：createElement<br>`,
                type: `<code>Function({row,column,rowIndex},h):VNode</code>`,
                optionalVal: "-",
                default: "-",
                rowKey: 45,
            },
            {
                param: "<span class='expand'>ellipsis</span>",
                desc: `Cell ellipsis configuration`,
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 49,
            },
            {
                param: "<span class='expand'>filter</span>",
                desc: `Filter configuration.`,
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 50,
            },
            {
                param: "<span class='expand'>filterCustom</span>",
                desc: `Filter custom configuration.`,
                type: "<code>Object</code>",
                optionalVal: "-",
                default: "-",
                rowKey: 55,
            },
        ],
        columns: columnsType1,
        //column filter props
        filterProps: {
            data: [
                {
                    param: "filterList",
                    desc: `	1、filter conditions<br>
                    2、It contains three attributes: label、 value and selected. like:<code>[{ value: 0, label: "1900-05-20", selected: false }]</code>`,
                    type: "<code>Array</code>",
                    optionalVal: "-",
                    default: "-",
                },
                {
                    param: "isMultiple",
                    desc: `Enable multiple selection of filter items`,
                    type: "<code>Boolean</code>",
                    optionalVal: "-",
                    default: "false",
                },
                {
                    param: "filterConfirm",
                    desc: `1、Filter confirm function。<br>2、Receive 1 parameter，<code>filterList</code>：filter conditions`,
                    type: "<code>Function({filterList})</code>",
                    optionalVal: "-",
                    default: "-",
                },
                {
                    param: "filterReset",
                    desc: `1、Filter reset function<br>2、Receive 1 parameter，<code>filterList</code>：filter conditions`,
                    type: "<code>Function({filterList})</code>",
                    optionalVal: "-",
                    default: "-",
                },
                {
                    param: "filterIcon",
                    desc: `1、filter custom icon rendering function.<br>2、parameter information。h：createElement`,
                    type: "<code>Function(h):VNode</code>",
                    optionalVal: "-",
                    default: "-",
                },
                {
                    param: "maxHeight",
                    desc: `1、The maximum height of the filter box. Height without operation button`,
                    type: "<code>Number</code>",
                    optionalVal: "-",
                    default: "1000",
                },
            ],
            columns: columnsType1,
        },
        //column filter custom props
        filterCustomProps: {
            data: [
                {
                    param: "render",
                    desc: `1、Render function<br>
                    2、Parameters received by render functions,showFn:show filter box function、closeFn:close filter box function、<code>h</code>：createElement`,
                    type: "<code>Function({showFn,closeFn},h):VNode</code>",
                    optionalVal: "-",
                    default: "-",
                },
                {
                    param: "filterIcon",
                    desc: `1、filter custom icon rendering function.<br>2、parameter information.h：createElement`,
                    type: "<code>Function(h):VNode</code>",
                    optionalVal: "-",
                    default: "-",
                },
            ],
            columns: columnsType1,
        },
        // ellipsis
        ellipsisProps: {
            data: [
                {
                    param: "lineClamp",
                    desc: `How many lines start to omit`,
                    type: "<code>Number</code>",
                    optionalVal: "-",
                    default: "1",
                },
                {
                    param: "showTitle",
                    desc: `Is the mouse hovering to display the title`,
                    type: "<code>Boolean</code>",
                    optionalVal: "-",
                    default: "true",
                },
            ],
            columns: columnsType1,
        },
    },

    // instance methods
    instanceMethods: {
        data: [
            {
                name: "scrollTo",
                desc: `Scrolls the table to the specified position`,
                param: "Refer to <a href='https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo'> MDN scrollTo</a>",
            },
            {
                name: "scrollToRowKey",
                desc: `Scroll the table to the location of the row key`,
                param: "{rowKey}",
            },
            {
                name: "setHighlightRow <code>v2.9.0</code>",
                desc: `Set highlight row <a href='#/en/doc/table/row-style?anchor=row-click-highlight'>Refer To Demo</a>`,
                param: "{rowKey}",
            },
            {
                name: "startEditingCell <code>v2.10.0</code>",
                desc: `Start cell editing  <a href='#/en/doc/table/cell-edit?anchor=ke-kong-bian-ji'>Refer To Demo</a>`,
                param: "{rowKey,colKey,defaultValue}",
            },
            {
                name: "stopEditingCell <code>v2.10.0</code>",
                desc: `Stop cell editing  <a href='#/en/doc/table/cell-edit?anchor=ke-kong-bian-ji'>Refer To Demo</a>`,
                param: "{rowKey,colKey}",
            },
            {
                name: "stopAllEditingCell <code>v2.10.0</code>",
                desc: `Stop all cell editing  <a href='#/en/doc/table/cell-edit?anchor=ke-kong-bian-ji'>Refer To Demo</a>`,
                param: "-",
            },
            {
                name: "hideColumnsByKeys <code>v2.11.0</code>",
                desc: `Hide columns  <a href='#/en/doc/table/column-hidden?anchor=instance-methods'>Refer To Demo</a>`,
                param: "keys",
            },
            {
                name: "showColumnsByKeys <code>v2.11.0</code>",
                desc: `Show columns  <a href='#/en/doc/table/column-hidden?anchor=instance-methods'>Refer To Demo</a>`,
                param: "keys",
            },
        ],
        columns: columnsType2,
    },

    // 可展开配置
    expandOption: {
        data: [
            {
                param: "expandable",
                desc: `	1、Whether the row rendering function is allowed to expand. Returns a Boolean value<br>
                2、Receive 3 parameter,<code>row</code>:Current row data、<code>column</code>:Column configuration、<code>rowIndex</code>:rowIndex`,
                type: "<code>Function({row,column,rowIndex})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "render",
                desc: `1、Render functions<br>
                2、The parameters received by the render function. row:Current row data、column:Column configuration、rowIndex:rowIndex、<code>h</code>：createElement`,
                type: "<code>Function({row,column,rowIndex},h):VNode</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "defaultExpandAllRows",
                desc: `is expand all row`,
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },
            {
                param: "defaultExpandedRowKeys",
                desc: `The default expanded row key. When parameter<code>defaultExpandAllRows</code> and parameter <code>defaultExpandedRowKeys</code> exist at the same time,priority of use<code>defaultExpandAllRows</code>`,
                type: "<code>String[]</code>、<code>Number[]</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "expandedRowKeys",
                desc: `Controllable attributes of expand row, After setting the property, <code>defaultExpandAllRows</code> and <code>defaultExpandedRowKeys</code> will be invalid.refer to examples for details`,
                type: "<code>String[]</code>、<code>Number[]</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "beforeExpandRowChange",
                desc: `1、Expand functions before switching,If false is returned, execution is interrupted.<br>
                2、Receive 3 parameter,<code>beforeExpandedRowKeys</code>:All expanded keys before the change,<code>row</code>:The current row data,<code>rowIndex</code>row index`,
                type: "<code>Function({beforeExpandedRowKeys,row,rowIndex})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "afterExpandRowChange",
                desc: `1、Expand the function after switching.<br>
                2、Receive 3 parameter,<code>afterExpandedRowKeys</code>:All expanded keys after change,<code>row</code>:Current row data,<code>rowIndex</code>row index`,
                type: "<code>Function({afterExpandedRowKeys,row,rowIndex})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "trigger",
                desc: `Expand the row event trigger type.
                <code>icon</code>：expand by click the icon;<code>cell</code>：expand by click cell;<code>row</code>:expand by click row`,
                type: "<code>String</code>",
                optionalVal: `"icon"、"cell"、"row"`,
                default: `"icon"`,
            },
        ],
        columns: columnsType1,
    },

    // 行多选配置
    checkboxOption: {
        data: [
            {
                param: "defaultSelectedAllRows",
                desc: `Is selected all by default`,
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },
            {
                param: "defaultSelectedRowKeys",
                desc: `Default selected row keys`,
                type: "<code>String[]</code>、<code>Number[]</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "disableSelectedRowKeys",
                desc: `Disable selected row keys`,
                type: "<code>String[]</code>、<code>Number[]</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "selectedRowKeys",
                desc: `The controllable properties. After setting the property,  <code>defaultSelectedAllRows</code> and <code>defaultSelectedRowKeys</code> will be invalid. Refer to example`,
                type: "<code>String[]</code>、<code>Number[]</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "selectedRowChange",
                desc: `Change event for the selected row. Receive 3 parameter,row:Current row data,<code>isSelected</code>Whether the current row is selected,<code>selectedRowKeys</code>All selected rowKey information`,
                type: "<code>Function({row, isSelected, selectedRowKeys})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "selectedAllChange",
                desc: `Select all change events. The event receives 2 parameters,<code>isSelected</code> Select all or not.<code>selectedRowKeys</code>All selected rowKey information`,
                type: `<code>Function({isSelected, selectedRowKeys})</code>`,
                optionalVal: "-",
                default: "-",
            },
            {
                param: "hideSelectAll",
                desc: `Is hide select all button`,
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },
        ],
        columns: columnsType1,
    },

    // 行单选配置
    radioOption: {
        data: [
            {
                param: "defaultSelectedRowKey",
                desc: `Default selected row key`,
                type: "<code>String</code>、<code>Number</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "disableSelectedRowKeys",
                desc: `Disable selected row keys`,
                type: "<code>String[]</code>、<code>Number[]</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "selectedRowKey",
                desc: `The controllable properties of the selected row, After setting the property, <code>defaultSelectedRowKey</code> will be invalid. Refer to example`,
                type: "<code>String</code>、<code>Number</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "selectedRowChange",
                desc: `Change event for the selected row. Method receives 1 parameter, row:Current row data`,
                type: "<code>Function({row})</code>",
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 虚拟滚动设置
    virtualScrollOption: {
        data: [
            {
                param: "enable",
                desc: `Enable virtual scrolling`,
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },
            {
                param: "minRowHeight",
                desc: `The min row height (PX). The smaller the value is, the more row is rendered in the table visualization range. It can be set according to the actual minimum height`,
                type: "<code>Number</code>",
                optionalVal: "-",
                default: "40",
            },
            {
                param: "scrolling",
                desc: `Scrolling callback events.<br><code>startRowIndex</code> is the line number currently starting rendering,<code>visibleStartIndex</code> is the starting line number of the currently visible area,<code>visibleEndIndex</code> is the end line number of the currently visible area,<code>visibleAboveCount</code> is the number of renderings above the currently visible area,<code>visibleBelowCount</code> is the number of renderings below the currently visible area`,
                type: "Function({startRowIndex,visibleStartIndex,visibleEndIndex,visibleAboveCount,visibleBelowCount})",
                optionalVal: "-",
                default: "-",
            },
            /* {
                param: "bufferScale",
                desc: `缓冲比例。可视范围数据的整数倍，防止滚动过快白屏，默认无缓冲`,
                type: "<code>Number</code>",
                optionalVal: "-",
                default: "0"
            } */
        ],
        columns: columnsType1,
    },

    // 排序设置
    sortOption: {
        data: [
            {
                param: "multipleSort",
                desc: `Enable multi field sorting`,
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },
            {
                param: "sortAlways",
                desc: `Whether to turn on sorting is only switched between ascending and descending`,
                type: "<code>Boolean</code>",
                optionalVal: "-",
                default: "false",
            },
            {
                param: "sortChange",
                desc: `Sort change events. Event receives 1 Parameter object:Sort rules for columns`,
                type: "<code>Function({row})</code>",
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 单元格合并配置
    cellSpanOption: {
        data: [
            {
                param: "bodyCellSpan",
                desc: `1、Body cell merge function<br>2、Parameter information. <code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index`,
                type: `<code>Function({row,column,rowIndex})</code>`,
                optionalVal: "-",
                default: "-",
            },
            {
                param: "footerCellSpan",
                desc: `1、footer ell merge function<br>2、Parameter information. <code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index`,
                type: `<code>Function({row,column,rowIndex})</code>`,
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 事件自定义配置
    eventCustomOption: {
        data: [
            {
                param: "bodyRowEvents",
                desc: `1、body row custom events,Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>row</code>Current row data、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave`,
                type: "<code>Function({row,rowIndx})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "bodyCellEvents",
                desc: `1、body column custom events,Returns the event that needs to be customized.<br>2、Receive 3 parameters.<code>row</code>Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave`,
                type: "<code>Function({row,column,rowIndx})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "headerRowEvents",
                desc: `1、header row custom events,Returns the event that needs to be customized.<br>2、Receive 1 parameters.<code>rowIndex</code>：header row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave<br>`,
                type: "<code>Function({rowIndex})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "headerCellEvents",
                desc: `1、header column custom events,Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave`,
                type: "<code>Function({column,rowIndx})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "footerRowEvents",
                desc: `1、footer row custom events, Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>row</code>Current row data、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave`,
                type: "<code>Function({row,rowIndx})</code>",
                optionalVal: "-",
                default: "-",
            },
            {
                param: "footerCellEvents",
                desc: `1、footer column custom events, Returns the event that needs to be customized.<br>2、Receive 3 parameters.<code>row</code>Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave`,
                type: "<code>Function({row,column,rowIndx})</code>",
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 列隐藏配置
    columnHiddenOption: {
        data: [
            {
                param: "defaultHiddenColumnKeys <code>v2.11.0</code>",
                desc: `Set default hidden columns`,
                type: `<code>Array</code>`,
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 单元格样式配置
    cellStyleOption: {
        data: [
            {
                param: "bodyCellClass",
                desc: `1、Table body cell style<br>
                2、Received 3 parameters,<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index`,
                type: `<code>Function({row,column,rowIndex})</code>`,
                optionalVal: "-",
                default: "-",
            },
            {
                param: "headerCellClass",
                desc: `1、Header cell style<br>
                2、Received 2 parameters,<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index`,
                type: `<code>Function({column,rowIndex})</code>`,
                optionalVal: "-",
                default: "-",
            },
            {
                param: "footerCellClass",
                desc: `1、Footer cell style<br>
                2、Received 3 parameters,<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index`,
                type: `<code>Function({row,column,rowIndex})</code>`,
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 行样式配置
    rowStyleOption: {
        data: [
            {
                param: "hoverHighlight",
                desc: `row hover background highlight`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "true",
            },
            {
                param: "clickHighlight",
                desc: `row click background highlight`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "true",
            },
            {
                param: "stripe",
                desc: `row stripe`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "false",
            },
        ],
        columns: columnsType1,
    },

    // 单元格编辑配置
    editOption: {
        data: [
            {
                param: "doubleClickEdit",
                desc: `Enable double click cell editing`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "true",
            },
            {
                param: "fullRowEdit",
                desc: `Enable full row editing`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "false",
            },
            {
                param: "textSelectedWhenCellFocus",
                desc: `Enable cell focus text selection`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "true",
            },
            {
                param: "stopEditingWhenCellLoseFocus",
                desc: `Enable cell to auto stop editing when cell lose focus`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "true",
            },
            {
                param: "cellValueChange",
                desc: `Cell stop edit callback method. <code>row</code>Current row data,<code>column</code>Current column `,
                type: `<code>Function({ row, column })</code>`,
                optionalVal: "-",
                default: "-",
            },
            {
                param: "rowValueChange",
                desc: `Row stop edit callback method. <code>row</code>Current row data`,
                type: `<code>Function({ row })</code>`,
                optionalVal: "-",
                default: "-",
            },
        ],
        columns: columnsType1,
    },

    // 单元格选择配置
    cellSelectionOption: {
        data: [
            {
                param: "enable",
                desc: `enable cell selection`,
                type: `<code>Boolean</code>`,
                optionalVal: "-",
                default: "true",
            },
        ],
        columns: columnsType1,
    },
};
