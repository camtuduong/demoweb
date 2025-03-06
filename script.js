document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    // Danh sách màu ngẫu nhiên
    const colors = [
      "#ffadad",
      "#ffd6a5",
      "#fdffb6",
      "#caffbf",
      "#9bf6ff",
      "#a0c4ff",
      "#bdb2ff",
    ];

    // Chọn một màu ngẫu nhiên
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Thay đổi màu nền
    document.body.style.backgroundColor = randomColor;
  });
