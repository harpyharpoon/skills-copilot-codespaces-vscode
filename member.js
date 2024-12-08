function skillsMember() {
  var member = this;
  var skills = member.skills;
  var skillsArr = [];

  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];
    skillsArr.push(skill.name);
  }

  return skillsArr;
}