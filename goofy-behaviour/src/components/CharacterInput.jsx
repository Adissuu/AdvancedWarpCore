import { useEffect, useState } from "react";
import useStore from "../store"; // Update the path as needed
import survivorImage from "../assets/survivor1.png";
import killerImage from "../assets/killer1.png";
import "./CharacterInput.css";

const CharacterInput = () => {
  const {
    setTime,
    setDay,
    setRankName,
    setRankNum,
    setModelType,
    setServer,
    setPartySize,
  } = useStore();

  const [partySizeValue, setPartySizeValue] = useState("1");

  const { isSurvivor } = useStore();

  useEffect(() => {
    if (!isSurvivor) {
      setPartySizeValue("1");
      setPartySize("1");
    }
  }, [isSurvivor, setPartySize]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "time":
        setTime(value + ":00");
        break;
      case "day":
        setDay(value);
        break;
      case "rankName":
        setRankName(value);
        break;
      case "rankNum":
        setRankNum(value);
        break;
      case "modelType":
        setModelType(value);
        break;
      case "server":
        setServer(value);
        break;
      case "partySize":
        setPartySizeValue(value);
        setPartySize(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="charInput">
      <div className="inputCol">
        <div className="input-group">
          <label htmlFor="time">TIME:</label>
          <input
            type="time"
            id="time"
            name="time"
            className="otherInput input-field"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="day">DAY:</label>
          <select
            id="day"
            name="day"
            onChange={handleInputChange}
            className="input-field"
          >
            <option>Mon</option>
            <option>Tue</option>
            <option>Wed</option>
            <option>Thu</option>
            <option>Fri</option>
            <option>Sat</option>
            <option>Sun</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="rankName">RANK:</label>
          <div className="rankSelect">
            <select
              id="rankName"
              name="rankName"
              onChange={handleInputChange}
              className="input-field"
            >
              <option>Ash</option>
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
              <option>Iridescent</option>
            </select>
            <select
              id="rankNum"
              name="rankNum"
              onChange={handleInputChange}
              className="input-field"
            >
              <option>IV</option>
              <option>III</option>
              <option>II</option>
              <option>I</option>
            </select>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img
          src={isSurvivor ? survivorImage : killerImage}
          alt="Character"
          className="centered-image"
        />
      </div>
      <div className="inputCol">
        <div className="input-group">
          <label htmlFor="partySize">MODEL TYPE:</label>
          <select
            id="partySize"
            name="modelType"
            onChange={handleInputChange}
            className="input-field"
          >
            <option>More Killers</option>
            <option>More Survivors</option>
            <option>Adapted</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="server">SERVER:</label>
          <select
            id="server"
            name="server"
            onChange={handleInputChange}
            className="input-field"
          >
            <option>us-east-1</option>
            <option>us-west-2</option>
            <option>eu-central-1</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="partySize">PARTY SIZE:</label>

          <select
            disabled={!isSurvivor}
            id="partySize"
            name="partySize"
            onChange={handleInputChange}
            className="input-field"
            value={partySizeValue}
          >
            <option>1</option>
            {isSurvivor && (
              <>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CharacterInput;
