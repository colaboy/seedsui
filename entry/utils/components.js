// 快捷选择
module.exports = {
  web: {
    Button: {
      description: 'Comming soon',
      code: `<Button onClick={handleSave}>{locale('')}</Button>`
    }
  },
  mobile: {
    '<Actionsheet': {
      description: 'Actionsheet',
      code: `<Actionsheet.Combo
        // placeholder="Please select"
        // value={value}
        // list={list}
        // onChange={(newValue) => {
        //   console.log('onChange:', newValue)
        //   setValue(newValue)
        // }}
        // onVisibleChange={(visible) => {
        //   console.log('visible:', visible)
        // }}
        // style={{ height: '100px', backgroundColor: '#f8f8f8' }}
        // comboRender={({ value }) => {
        //   console.log(value)
        //   return value?.[0]?.name || ''
        // }}
      />`
    },
    '<Badge': {
      description: 'Badge',
      code: `<Badge maxLength={2} ellipsis={'+'}>
      1000
    </Badge>`
    },
    '<Button': {
      description: 'Button',
      code: `<Button className="primary" style={buttonStyle}>
      primary
    </Button>`
    },
    '<Calendar': {
      description: 'Calendar panel',
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
    />`
    },
    '<Card': {
      description: 'Button',
      code: `<Card>1000</Card>`
    },
    '<Cascader': {
      description: 'Cascader',
      code: `<Cascader.Combo
      // list={list}
      // loadData={loadData}
      // value={value}
      // onChange={(newValue) => {
      //   console.log('newValue:', newValue)
      //   setValue(newValue)
      // }}
      // allowClear="exclusion-ricon"
      // placeholder="Please select"
      // ricon={<i className="ricon shape-arrow-right sm"></i>}
      // captionProps={{
      //   caption: '级联选择'
      // }}
    />`
    },
    '<Chat': {
      description: 'Chat',
      code: `<Chat caption="11">1000</Chat>
    <Chat caption="11" className="right">
      1000
    </Chat>`
    },
    '<Checkbox': {
      description: 'Chat',
      code: `<Checkbox
      // checked={value}
      // onChange={setValue}
    >
      checkbox
    </Checkbox>`
    },
    Clipboard: {
      description: 'Clipboard',
      code: `Clipboard.copy('https://colaboy.github.io/seedsui-react/', {
      success: () => {
        Toast.show({ content: 'Copy to clipboard success!' })
      }
    })`
    },
    '<Col': {
      description: 'Col',
      code: `<Col span={8} className="color-sub">
      Customer Name:
    </Col>`
    },
    '<Counter': {
      description: 'Counter',
      code: `<Counter from={20} to={500} />`
    },
    '<DatePicker': {
      description: 'DatePicker component',
      code: `<DatePicker.Combo
        placeholder="Please select"
        type="datetime"
        allowClear
        // value={value}
        // defaultPickerValue={new Date('2022-08-22 00:00')}
        // min={new Date()}
        // onChange={setValue}
    />`
    },
    '<Image': {
      description: 'Image',
      code: `<Image
      // list={list}
      // onBeforeChoose={handleBeforeChoose}
      // onReUpload={handleReUpload}
      // onChoose={handleChoose}
      // onDelete={handleDelete}
      // onPreview={handlePreview}
      // onFileChange={(e) => {
      //   console.log('e', e)
      // }}
      // uploadPosition="end"
      // fileProps={{
      //   capture: 'camera'
      // }}
    />`
    },
    '<IndexBar': {
      description: 'IndexBar',
      code: `<div className="position-relative" style={{ height: '500px', overflow: 'hidden' }}>
    <IndexBar>
        <div className="position-relative" style={{ height: '500px', overflow: 'auto' }}>
          <ul>
            <IndexBar.Anchor name={'B'}>
              <li>标题B</li>
            </IndexBar.Anchor>
            <li>白起</li>
            <li>白旭</li>
            <li>冰冰</li>
            <IndexBar.Anchor name={'C'}>
              <li>标题C</li>
            </IndexBar.Anchor>
            <li>曹操</li>
            <IndexBar.Anchor name={'D'}>
              <li>D</li>
            </IndexBar.Anchor>
            <li>大成子</li>
            <IndexBar.Anchor name={'F'}>
              <li>F</li>
            </IndexBar.Anchor>
            <li>樊哙</li>
          </ul>
        </div>
      </IndexBar>
    <div/>`
    },
    '<Input': {
      description: 'Input',
      code: `<Input.Text
      inputProps={{
        // visible: false,
        style: {
          padding: '12px'
        }
      }}
      style={{ backgroundColor: '#f8f8f8' }}
      // readOnly
      value={value}
      maxLength={10}
      allowClear={'exclusion-ricon'}
    />`
    },
    '<Layout': {
      description: 'Input',
      code: `<Layout safeArea className="full">
      <Layout.Header>Header</Layout.Header>
      <Layout.Main>
        Main
      </Layout.Main>
      <Layout.Footer>Footer</Footer>
    </Layout>`
    },
    '<Loading': {
      description: 'Loading',
      code: `Loading.show()`
    },
    '<Location': {
      description: 'Location',
      code: `<Location.Combo
      // editable
      // 获取定位和地址工具类
      // type="wgs84"
      // 正常不需要传入
      // config={{
      //   key: '',
      //   type: 'bmap'
      // }}
      // disabled
      // autoLocation
      // clickAction="choose"
      // previewVisible
      // chooseVisible
      allowClear
      autoFit
      // value={value}
      // 点击整行触发的动作: location | choose | preview
      // onChange={(val) => {
      //   console.log('修改:', val)
      //   setValue(val)
      // }}
      // onVisibleChange={(visible) => {
      //   console.log('显隐:', visible)
      // }}
      // onLocationStatusChange={(status) => {
      //   console.log('定位状态:', status)
      // }}
    />`
    },
    '<Map': {
      description: 'Map',
      code: `<MapContainer
      // ref={mapRef}
      // center={value}
      // zoom={14}
      // onMoveEnd={(map) => {
      //   console.log('获取中心点:', map.getCenter())
      // }}
      // onLoad={() => {
      // }}
    >
    </MapContainer>`
    },
    '<Mark': {
      description: 'Mark',
      code: `<Mark className="primary" style={buttonStyle}>
      primary
    </Mark>`
    },
    '<Modal': {
      description: 'Modal',
      code: `Modal.alert({
      content: 'alert content'
    })`
    },
    '<Picker': {
      description: 'Picker',
      code: `<Picker.Combo
        // placeholder="Please select"
        // value={value}
        // list={list}
        // onChange={(newValue) => {
        //   console.log('onChange:', newValue)
        //   setValue(newValue)
        // }}
      />`
    },
    '<QRCode': {
      description: 'QRCode',
      code: `<QRCode text={url}>
      <img style={Logo} alt="" src="//res.waiqin365.com/d/dinghuo365/logo.png" />
    </QRCode>`
    },
    '<Radio': {
      description: 'Radio',
      code: `<Radio
      // checked={value}
      // onChange={setValue}
    >
      radio
    </Radio>`
    },
    '<Row': {
      description: 'Row',
      code: `<Row className="border-b" style={{ padding: '10px 0', marginLeft: '12px' }}>
      <Col span={8} className="color-sub">
        Customer Name:
      </Col>
      <Col span={16}>Ethan</Col>
      <Col span={8} className="color-sub">
        Age:
      </Col>
      <Col span={16}>Twenty-eight</Col>
    </Row>`
    },
    '<SafeArea': {
      description: 'SafeArea',
      code: `<SafeArea />`
    },
    '<Select': {
      description: 'Select',
      code: `<Select.Combo
      // placeholder="Please select"
      // value={value}
      // list={list}
      // onChange={(newValue) => {
      //   console.log('onChange:', newValue)
      //   setValue(newValue)
      // }}
    />`
    },
    '<Selector': {
      description: 'Selector',
      code: `<Selector
      // multiple
      // value={value}
      // list={list}
      // onChange={(newValue) => {
      //   console.log('onChange:', newValue)
      //   setValue(newValue)
      // }}
    />`
    },
    '<Signature': {
      description: 'Signature',
      code: `<Signature.Combo
      // placeholder="Please select"
      // value={value}
      // list={list}
      // onBeforeChange={handleBeforeChange}
      // onChange={(newValue) => {
      //   console.log('onChange:', newValue)
      //   setValue(newValue)
      // }}
    />`
    },
    '<Switch': {
      description: 'Switch',
      code: `<Switch
      className="notext"
      // disabled
      checked={checked}
      checkedProps={{ text: '开' }}
      uncheckedProps={{ text: '关' }}
      onChange={setChecked}
    />`
    },
    '<Tabs': {
      description: 'Tabs',
      code: `<Tabs
      className="tabs-line tabs-line-width-percent80 border-b"
      // style={{ height: 100 }}
      // list={list}
      // value={value}
      // onChange={handleChange}
    />`
    },
    Toast: {
      description: 'Toast',
      code: `Toast.show({
      content: 'content'
    })`
    },
    '<Tooltip': {
      description: 'Tooltip',
      code: `<Tooltip
      content={<p>123412341234</p>}
      onVisibleChange={(visible) => {
        console.log('visible:', visible)
      }}
    >
      <div style={{ margin: 100 }}>点击</div>
    </Tooltip>`
    },
    '<Transfer': {
      description: 'Transfer',
      code: `<Transfer.Combo
      modal="page"
      multiple
      className="border-b"
      placeholder="Select"
      list={[
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' }
      ]}
      value={value}
      titles={['标题1', '标题2']}
      onChange={(newValue) => {
        console.log(newValue)
        setValue(newValue)
      }}
      footerRender={() => {
        return (
          <Layout.Footer className="listpicker-footer border-t">
            <Button className="listpicker-footer-submit primary">确定</Button>
          </Layout.Footer>
        )
      }}
    />`
    },
    '<TreePicker': {
      description: 'Transfer',
      code: `<TreePicker.Combo
      placeholder="Please select"
      value={value}
      list={treeData}
      multiple={true}
      captionProps={{
        caption: 'aaa'
      }}
      // defaultExpandAll={true}
      itemRender={(item, { keyword }) => {
        return (
          <div className="flex flex-middle">
            {item?.isDistrict && (
              <img
                className="size36"
                src={'https://image-test.waiqin365.com/imobii_portal/images/icon/default-face-small.png'}
                alt=""
                style={{ borderRadius: '100%', marginRight: '4px' }}
              />
            )}
            <HighlightKeyword text={item.name} keyword={keyword} />
          </div>
        )
      }}
      // 保留不在树结构中的value
      // preserveValue
      // 仅允许选中末级节点
      // onlyLeafCheck={true}
      // 级联 true: 不级联, false: 级联, children: 子级不级联父级
      // checkStrictly={'children'}
      // 启用半选功能
      enableHalfChecked
      checkable={true}
      onSelect={(item) => {
        console.log('select:', item)
      }}
      onChange={(newValue) => {
        console.log('checked:', newValue)
        setValue(newValue)
      }}
      onVisibleChange={(visible) => {
        console.log('visible:', visible)
      }}
    />`
    },
    '<Upload': {
      description: 'Upload',
      code: `<Upload
      list={list}
      onBeforeChoose={() => {
        return new Promise((resolve) => {
          resolve(true)
        })
      }}
      onReUpload={handleReUpload}
      onChoose={handleChoose}
      onDelete={handleDelete}
      onPreview={handlePreview}
      onFileChange={(e) => {
        console.log('e', e)
      }}
      uploadPosition="end"
      fileProps={{
        capture: 'camera'
      }}
    />`
    }
  }
}
