export class UserInfo {
  constructor(selectorName, selectorJob, selectorImage) {
    this.selectorName = document.querySelector(selectorName);
    this.selectorJob = document.querySelector(selectorJob);
    this.selectorImage = document.querySelector(selectorImage);
  }
  setUserInfo(name, job) {
    this.selectorName.textContent = name;
    this.selectorJob.textContent = job;
  }
  setUserAvatar(avatar) {
    this.selectorImage.src = avatar;
  }
  getUserInfo() {
    return {
      name: this.selectorName.textContent,
      job: this.selectorJob.textContent,
      avatar: this.selectorImage.src,
    };
  }
}
