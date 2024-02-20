


import React from "react";
import Form1 from "../images/form1.jpg";
import Form2 from "../images/form2.jpg";
export default function Procedure() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f0f2f5",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "#4CAF50", // Green color
    borderBottom: "2px solid #4CAF50",
    paddingBottom: "8px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const listItemStyle = {
    marginBottom: "10px",
  };

  const paragraphStyle = {
    lineHeight: "1.6",
    color: "#555",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    marginTop: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Steps for Bail Application</h1>
      </div>
      <div style={sectionStyle}>
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Bailable Offenses:</h2>
          <ul>
            <li style={listItemStyle}>
              <b>Consult with a Lawyer:</b> Seek legal advice from a qualified
              criminal defense lawyer who can guide you through the process.
            </li>
            <li style={listItemStyle}>
              <b>Determine Bailability: </b>Confirm whether the offense is
              bailable. If it is, you can apply for bail as a matter of right.
            </li>
            <li style={listItemStyle}>
              <b>Prepare Bail Application: </b>Your lawyer will prepare a bail
              application that includes details about the case, the grounds for
              seeking bail, and any supporting documents or affidavits.
            </li>
            <li style={listItemStyle}>
              <b>Submission to the Court:</b> The bail application is submitted
              to the court having jurisdiction over the case. This is typically
              the court where the charges are filed.
            </li>
            <li style={listItemStyle}>
              <b> Court Hearing:</b> The court will conduct a hearing where your
              lawyer presents arguments in favor of granting bail. The
              prosecution may present its arguments against granting bail.
            </li>
            <li style={listItemStyle}>
              <b>Bail Decision:</b> The court will decide whether to grant bail
              based on factors such as the nature of the offense, evidence, your
              criminal record, and the likelihood of you fleeing.
            </li>
            <li style={listItemStyle}>
              <b>Bail Conditions:</b> If the court grants bail, it may impose
              certain conditions such as surrendering your passport, regularly
              reporting to the police station, or refraining from contacting
              certain individuals.
            </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h2 style={headingStyle}>Non-Bailable Offenses</h2>
          <ul>
            <li style={listItemStyle}>
              <b>Consult with a Lawyer:</b> Seek immediate legal counsel from a
              criminal defense lawyer.
            </li>
            <li style={listItemStyle}>
              <b>Bail Application in Court:</b> A bail application must be filed
              in the court. Unlike bailable offenses, bail is not a matter of
              right in non-bailable cases, and the court has discretion in
              granting or denying bail.
            </li>
            <li style={listItemStyle}>
              <b>Notice to Public Prosecutor: </b>The court usually issues a
              notice to the public prosecutor to present their case on why bail
              should be denied.
            </li>
            <li style={listItemStyle}>
              <b>Bail Hearing:</b> The court will conduct a bail hearing where
              your lawyer and the prosecutor present arguments. The court will
              consider factors such as the severity of the offense, evidence
              against you, and the likelihood of you tampering with evidence or
              absconding.
            </li>
            <li style={listItemStyle}>
              <b>Bail Decision:</b> The court will decide whether to grant bail.
              In some cases, the court may order interim bail pending a detailed
              hearing.
            </li>
            <li style={listItemStyle}>
              <b>Bail Conditions: </b>If bail is granted, the court may impose
              conditions to ensure your presence during the trial and prevent
              interference with the investigation.
            </li>
          </ul>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Section 437 (Bailability):</h2>
        <p style={paragraphStyle}>
          <i>
            {" "}
            Section 437 deals with the granting of bail in bailable offenses. It
            establishes the right to bail for individuals accused of offenses
            that are categorized as bailable. Example : "Under Section 437 of
            the Code of Criminal Procedure, an accused person has the right to
            seek bail as a matter of course in cases where the offense is
            classified as bailable."
          </i>
        </p>
        <h2 style={headingStyle}>Section 439 (Non-Bailability):</h2>
        <p style={paragraphStyle}>
          <i>
            {" "}
            Section 439 pertains to the grant of bail in non-bailable offenses.
            It vests discretionary powers in the court to grant bail in such
            cases based on various factors, taking into consideration the
            seriousness of the offense. Example : "In non-bailable offenses, as
            outlined in Section 439 of the Code of Criminal Procedure, the court
            exercises its discretion in determining whether bail should be
            granted, considering factors such as the gravity of the offense and
            the likelihood of the accused tampering with evidence."
          </i>
        </p>
      </div>
      <img src={Form1} alt="Form1" style={imageStyle} />
      <img src={Form2} alt="Form2" style={imageStyle} />
    </div>
  );
}


