export class UserInfo {
  constructor(selectorName, selectorJob) {
    this.selectorName = document.querySelector(selectorName);
    this.selectorJob = document.querySelector(selectorJob);
  }
  setUserInfo(name, job) {
    this.selectorName.textContent = name;
    this.selectorJob.textContent = job;
  }
  getUserInfo() {
    return {
      name: this.selectorName.textContent,
      job: this.selectorJob.textContent,
    };
  }
}
