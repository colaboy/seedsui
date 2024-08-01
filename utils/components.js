// 快捷选择
module.exports = {
  Calendar: {
    code: `<Calendar
      // type="month" // week | month
      // titleFormatter="YYYY年MM月", // 标题日期格式化 YYYY年MM月DD日 周E 第W周
      // value={null}
      // min={} // 禁用之前日期
      // max={} // 禁用之后日期
      // draggable={} // 是否允许垂直拖动
      // headerVisible={true} // 头部隐藏
      // dateRender={(date) => {}} // 单个日期渲染
      // Event: listener the view change
      // onLoad={() => {}}
      // Event: click date
      // onChange={() => {}}
      // Event: view change
      // onSlideChange={() => {}}
    />`,
    description: 'Calendar panel'
  },
  DatePicker: {
    code: `<DatePicker.Combo
        placeholder="Please select"
        type="datetime"
        allowClear
        // value={value}
        // defaultPickerValue={new Date('2022-08-22 00:00')}
        // min={new Date()}
        // onChange={setValue}
    />`,
    description: 'DatePicker component'
  }
}
