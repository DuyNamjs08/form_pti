export const mappingContentList = (data, ma, value) => {
  var dataJson = data;
  for (let index = 0; index < dataJson.steps.length; index++) {
    var item = data.steps[index];
    if (item.contens.length > 0) {
      for (let i = 0; i < item.contens.length; i++) {
        var content = item.contens[i];
        if (content.content !== undefined && content.content.length > 0) {
          for (let j = 0; j < content.content.length; j++) {
            var itemContent = content.content[j];
            if (itemContent.ma === ma) {
              itemContent.list = value;
            }
          }
        }
      }
    }
  }

  return dataJson;
};

export const mappingContent = ({ data, ma, value }) => {
  var dataJson = data;
  for (let index = 0; index < dataJson.steps.length; index++) {
    var item = data.steps[index];
    if (item.contens.length > 0) {
      for (let i = 0; i < item.contens.length; i++) {
        var content = item.contens[i];
        if (content.content !== undefined && content.content.length > 0) {
          for (let j = 0; j < content.content.length; j++) {
            var itemContent = content.content[j];
            if (itemContent.ma === ma) {
              itemContent.content = value;
            }
          }
        }
      }
    }
  }

  return dataJson;
};
