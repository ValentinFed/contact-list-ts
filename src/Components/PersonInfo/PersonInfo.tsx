import React from "react";

type Props = {
  data: {
    id: string;
    firstNameLastName: string;
    jobTitle: string;
    emailAddress: string;
  };
  selectCard?: Function;
  deselectCard?: Function;
};

function PersonInfo(props: Props) {
  const { data, selectCard, deselectCard } = props;

  const clickCard = (id:string) => {
    if(selectCard) {
      selectCard(id)
    } 
    if(deselectCard) {
      deselectCard(id)
    } 
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        flexDirection: "column",
        padding: "32px",
        boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
        margin: "10px 0",
        background: "#fff",
        cursor: "pointer",
      }}
      className={`person-info ${deselectCard ? 'selected__item' : ''}`}
      onClick={() => clickCard(data.id)}
    >
      <div className="firstNameLastName">{data.firstNameLastName}</div>
      <div className="jobTitle">{data.jobTitle}</div>
      <div className="emailAddress">{data.emailAddress}</div>
    </div>
  );
}

export default PersonInfo;
