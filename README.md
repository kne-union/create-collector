
# create-collector


### 描述

创建一个消息集合，当接收到的消息达到数量上限再触发callback，一般用于高频数据上报，如日志上报时避免频繁请求服务器


### 安装

```shell
npm i --save @kne/create-collector
```

### 示例


#### 示例样式

```scss
.ant-card {
  border-color: black;
  text-align: center;
  width: 200px;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _CreateCollector(@kne/current-lib_create-collector)[import * as _CreateCollector from "@kne/create-collector"]

```jsx
const {default:CreateCollector} = _CreateCollector;

const BaseExample = ()=>{
    return <div>
        <CreateCollector />
    </div>;
};

render(<BaseExample />);

```


### API

| 属性 | 类型 | 默认值 | 说明 |
|----|----|-----|----|
|    |    |     |    |
