posts = [];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if (!err) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

const user = {
  username: "swap",
  lastactivitytime: "13th of jan",
};

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastactivitytime = new Date().getTime();
      resolve(user.lastactivitytime);
    }, 1000);
  });
}
// promise1.all
function updatesapost() {
  Promise.all([
    createPost({ title: "Post Five", body: "This is Post Five" }),
    updateLastUserActivityTime(),
  ])
    .then(([createPostresolves, updateLastUserActivityTime]) => {
      console.log(updateLastUserActivityTime);
    })
    .catch((err) => console.log(err));
}

updatesapost();
