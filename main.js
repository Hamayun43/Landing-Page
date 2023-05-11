const animation_duration = 600;

document.getElementById("menu-toggle").addEventListener("click", () => {
  const myobject = document.getElementById("menu-toggle");
  if (myobject.classList.contains("fa-bars")) {
    myobject.classList.remove("fa-bars");
    myobject.classList.add("fa-close");
    open_menu();
  } else {
    myobject.classList.add("fa-bars");
    myobject.classList.remove("fa-close");
    close_menu();
  }
});
const open_menu = () => {
  document.getElementById("nav-mobile").animate(
    [
      {
        left: "-100%",
      },
      {
        left: "0",
      },
    ],
    {
      duration: animation_duration,
      fill: "both",
      easing: "ease",
    }
  );
};
const close_menu = () => {
  document.getElementById("nav-mobile").animate(
    [
      {
        left: "0",
      },
      {
        left: "-100%",
      },
    ],
    {
      duration: animation_duration,
      fill: "both",
      easing: "ease",
    }
  );
};

$(function () {
  $(".slider-content").slick();
});
