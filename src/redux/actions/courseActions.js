export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}

//all actions must have a TYPE property.