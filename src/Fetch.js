import React from 'react';

export default function Fetch() {
    fetch('https://eciapi.akshit.me/api/v11/consumer-forum/lookup/district-forum?caseNumber=CC%2F13%2F2022&districtId=eyJzdGF0ZUNvZGUiOiI4IiwiZGlzdHJpY3RDb2RlIjoiMyJ9')           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));
  return (
    <div>
      fetch
    </div>
  );
}
