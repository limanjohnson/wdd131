const points = [100, 88, 94, 78, 84, 69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = "Excellent";
  } else if (pointTotal >= 70) {
    status = "Complete";
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);

console.log(statusReport);