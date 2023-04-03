const blog = async () => {
  const posts = [{ title: "POST1" }, { title: "POST2" }, { title: "POST3" }];

  const user = {
    username: "swap",
    lastactivitytime: "13th of jan",
  };
  // creating a post
  const createPost = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(blog);
        const err = false;
        if (!err) {
          resolve();
        } else {
          reject("Error: Something went wrong");
        }
      }, 2000);
    });
  };
  // printing a post

  const printPost = () => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  };
  // deleting a post
  const deleteBlog = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
          const poppedElement = posts.pop();
          resolve(poppedElement);
        } else {
          reject("ERROR");
        }
      }, 1000);
    });
  };

  const updateLastUserActivityTime = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastactivitytime = new Date().getTime();
        resolve(user.lastactivitytime);
      }, 1000);
    });
  };

  let showPost = await printPost();
  let [createpost, deletebost, updatelastUserActivityTime] = await Promise.all([
    createPost([{ title: "POST6" }]),
    updateLastUserActivityTime(),
    deleteBlog(),
  ]);
  console.log(createpost, deletebost, updatelastUserActivityTime);
  // createpost({ title: "post2" });
  // console.log(createpost);
  // console.log(createpost());

  return showPost;
};

blog().then((msg) => {
  console.log(msg);
});

// promise1.all
