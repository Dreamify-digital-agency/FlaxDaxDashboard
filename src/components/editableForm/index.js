import React, { useState, useEffect } from "react";
import Editable from "../input-field/editable";
import "./index.css";

const EditableForm = (props) => {
  const { birdObject, update, add } = props;
  const {
    id,
    name,
    description,
    interestingFacts,
    habitat,
    migration,
    seasonalBird,
    summer,
    winter,
    forest,
    water,
  } = birdObject;
  console.log(name);
  console.log("birdObject in editableform", birdObject);
  // console.log({add ? "add is true" : "add is false"})
  console.log("add", add);
  useEffect(() => {
    setNameState(name);
    setDescriptionState(description);
    setFactsState(interestingFacts);
    setHabitatState(habitat);
    setMigrationState(migration);
    setSeasonalBirdState(seasonalBird);

    setSummerState(summer);
    setWinterState(winter);
    setForestState(forest);
    setWaterState(water);
  }, [props]);

  const convertBoolean = (string) => {
    let booleanVal = string.toLowerCase() === true;
    return booleanVal;
  };
  const [nameState, setNameState] = useState(name);
  console.log("nameState",nameState)
  const [descriptionState, setDescriptionState] = useState(
    birdObject.description
  );
  const [factsState, setFactsState] = useState(birdObject.interestingFacts);
  const [habitatState, setHabitatState] = useState(birdObject.habitat);
  const [migrationState, setMigrationState] = useState(birdObject.migration);
  const [seasonalBirdState, setSeasonalBirdState] = useState(
    birdObject.seasonalBird
  );
  const [summerState, setSummerState] = useState(summer);
  const [winterState, setWinterState] = useState(winter);
  const [forestState, setForestState] = useState(forest);
  const [waterState, setWaterState] = useState(water);

  const returnObject = (method) => {
    let newObj = {};

    newObj.description = descriptionState;
    newObj.interestingFacts = factsState;
    newObj.habitat = habitatState;
    newObj.migration = migrationState;
    newObj.seasonalBird = seasonalBirdState;
    // newObj.water = waterState;
    // newObj.winter = winterState;
    // newObj.forest = forestState;
    // newObj.summer = summerState;
    if (method === "add") {
      newObj.name = nameState;
    }

    console.log("object being added/updated: ", newObj);
    return newObj;
  };

  // update(returnObject())
  // create(returnObject('create'))
  // retrieveObj(returnObject)
  return (
    <div className="form-container">
      <div>id:{birdObject.id}</div>
      <div className="radiobox-container">
        <div className="radiobox-group">
          <div className="property-name">summer</div>
          <input
            type="radio"
            checked={summerState}
            onClick={() => {
              setSummerState(!summerState);
            }}
          ></input>
          <div className="property-name">winter</div>
          <input
            type="radio"
            checked={winterState}
            onClick={() => {
              setWinterState(!winterState);
            }}
          ></input>
        </div>
        <div className="radiobox-group">
          <div className="property-name">forest</div>
          <input
            type="radio"
            checked={forestState}
            onClick={() => {
              setForestState(!forestState);
            }}
          ></input>
          <div className="property-name">water</div>
          <input
            type="radio"
            checked={waterState}
            onClick={() => {
              setWaterState(!waterState);
            }}
          ></input>
        </div>
      </div>
      <Editable text={nameState} propertyPresent={"name"}>
        <input
          className="input"
          autoFocus
          type="text"
          name="task"
          placeholder={nameState}
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
        />
      </Editable>

      <Editable text={habitatState} propertyPresent={"habitat"}>
        <input
          className="input"
          autoFocus
          type="text"
          name="task"
          placeholder={habitatState}
          value={habitatState}
          onChange={(e) => setHabitatState(e.target.value)}
        />
      </Editable>
      <Editable text={migrationState} propertyPresent={"migration"}>
        <input
          className="input"
          autoFocus
          type="text"
          name="task"
          placeholder={migrationState}
          value={migrationState}
          onChange={(e) => setMigrationState(e.target.value)}
        />
      </Editable>
      <Editable text={seasonalBirdState} propertyPresent={"seasonal bird"}>
        <input
          className="input"
          autoFocus
          type="text"
          name="task"
          placeholder={seasonalBirdState}
          value={seasonalBirdState}
          onChange={(e) => setSeasonalBirdState(e.target.value)}
        />
      </Editable>
      <Editable text={descriptionState} propertyPresent={"description"}>
        <textarea
          className="text-area editable-input"
          autoFocus
          type="text"
          name="task"
          placeholder={descriptionState}
          value={descriptionState}
          onChange={(e) => setDescriptionState(e.target.value)}
        />
      </Editable>
      <Editable text={factsState} propertyPresent={"facts"}>
        <textarea
          className="text-area editable-input"
          autoFocus
          type="text"
          name="task"
          placeholder={factsState}
          value={factsState}
          onChange={(e) => setFactsState(e.target.value)}
        />
      </Editable>
      <div className="button-group">
        {update ? (
          <button onClick={() => update(returnObject("update"))}>update</button>
        ) : null}
        {add ? (
          <button onClick={() => add(returnObject("add"))}>Create bird</button>
        ) : null}
      </div>
    </div>
  );
};

export default EditableForm;
