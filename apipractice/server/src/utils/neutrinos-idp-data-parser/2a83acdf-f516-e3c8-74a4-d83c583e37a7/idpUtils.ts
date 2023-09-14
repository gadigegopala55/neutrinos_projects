export class idpUtils {
  textractCopy = [];
  textractValue = {};
  textractKeys = {};
  textractWords = {};
  kvPairsBypage = {};
  textractTable = {};
  textractCell = {};
  keyValuePairs = {};
  constructor() {}

  async constructFileObj(filedata) {
    await this.clearVarData();
    await this.filterObj(filedata);
    await this.constructKeyValuePairs();
    await this.constructKYPairs();
    // return this.kvPairsBypage;
    return this.keyValuePairs;
  }

  constructKYPairs() {
    let values = Object.values(this.kvPairsBypage);
    let kyValues = values.flat();
    // this.keyValuePairs[]
    for (let i = 0; i < kyValues.length; i++) {
      // const element = kyValues[i];
      this.keyValuePairs[kyValues[i]["key"]["value"]] =
        kyValues[i]["value"]["value"];
    }
  }

  clearVarData() {
    this.textractCopy = [];
    this.textractValue = {};
    this.textractKeys = {};
    this.textractWords = {};
    this.kvPairsBypage = {};
    this.textractTable = {};
    this.textractCell = {};
  }

  filterObj(textractObj) {
    this.textractCopy = textractObj["Blocks"];
    for (let i = 0; i < this.textractCopy.length; i++) {
      if (
        this.textractCopy[i]["BlockType"] == "KEY_VALUE_SET" &&
        this.textractCopy[i]["EntityTypes"].includes("KEY")
      ) {
        this.textractKeys[this.textractCopy[i]["Id"]] = this.textractCopy[i];
      } else if (
        this.textractCopy[i]["BlockType"] == "KEY_VALUE_SET" &&
        this.textractCopy[i]["EntityTypes"].includes("VALUE")
      ) {
        this.textractValue[this.textractCopy[i]["Id"]] = this.textractCopy[i];
      } else if (this.textractCopy[i]["BlockType"] == "WORD") {
        this.textractWords[this.textractCopy[i]["Id"]] = this.textractCopy[i];
      } else if (this.textractCopy[i]["BlockType"] == "TABLE") {
        this.textractTable[this.textractCopy[i]["Id"]] = this.textractCopy[i];
      } else if (this.textractCopy[i]["BlockType"] == "CELL") {
        this.textractCell[this.textractCopy[i]["Id"]] = this.textractCopy[i];
      }
    }
    this.textractCopy = [];
  }

  constructKeyValuePairs() {
    let keys = Object.keys(this.textractKeys);
    for (let i = 0; i < keys.length; i++) {
      let obj = this.textractKeys[keys[i]];
      let pageNum = obj["Page"] ? obj["Page"] : 1;
      let actualObj = {};
      for (let i = 0; i < obj["Relationships"].length; i++) {
        let relationshipObj = obj["Relationships"][i];

        if (relationshipObj["Type"] == "VALUE") {
          let valueObj = this.getValueObj(relationshipObj["Ids"]);
          actualObj["value"] = {
            value: valueObj.name,
            boundingBox: valueObj.boundingBox,
            ids: relationshipObj["Ids"],
            page: valueObj.page,
          };
        } else if (relationshipObj["Type"] == "CHILD") {
          let keyName = this.getName(relationshipObj["Ids"]);
          keyName = keyName ? keyName.trim() : keyName;
          actualObj["key"] = {
            value: keyName,
            boundingBox: obj["Geometry"]["BoundingBox"],
            ids: relationshipObj["Ids"],
            page: obj["Page"],
          };
        }
      }
      if (!this.kvPairsBypage[pageNum] || !this.kvPairsBypage[pageNum].length) {
        this.kvPairsBypage[pageNum] = [];
      }
      this.kvPairsBypage[pageNum].push(actualObj);
    }
  }

  getValueObj(parentValueIds) {
    let name = ``;
    let boundingBox = {};
    let pageNumber = 0;
    for (let i = 0; i < parentValueIds.length; i++) {
      // name = `${name} ${this.getName()}`
      boundingBox =
        this.textractValue[parentValueIds[i]]["Geometry"]["BoundingBox"];
      pageNumber = this.textractValue[parentValueIds[i]]["Page"];
      let valueRelactionShipIds =
        this.textractValue[parentValueIds[i]]["Relationships"];
      if (valueRelactionShipIds && valueRelactionShipIds.length) {
        for (let i = 0; i < valueRelactionShipIds.length; i++) {
          if (valueRelactionShipIds[i]["Type"] == "CHILD") {
            name = `${name} ${this.getName(valueRelactionShipIds[i]["Ids"])}`;
          }
        }
      }
    }
    name = name ? name.trim() : name;
    return { name: name, boundingBox: boundingBox, page: pageNumber };
  }

  // returns name based on the id's
  getName(idsArr) {
    let name = "";
    for (let i = 0; i < idsArr.length; i++) {
      if (this.textractWords[idsArr[i]] && this.textractWords[idsArr[i]].Text) {
        name = `${name} ${this.textractWords[idsArr[i]].Text}`;
      }
    }
    return name;
  }
}
