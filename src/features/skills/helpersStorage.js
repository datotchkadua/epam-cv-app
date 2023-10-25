export function getSkillsDataFromLocalStorage() {
  const skillsData = localStorage.getItem("skills");
  return skillsData ? JSON.parse(skillsData) : [];
}
export function saveSkillsDataToLocalStorage(skills) {
  localStorage.setItem("skills", JSON.stringify(skills));
}
