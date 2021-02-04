
if (window.location.href == "https://expert.chegg.com/expertqna") {
    console.log("skipping");
    document.getElementsByClassName("sc-jTzLTM gKItAZ sc-jqCOkK gRVFSE sc-bbmXgH fGVldU")[0].click(); // 1. skip button
    document.getElementsByClassName("sc-drMfKT eOoWZC")[3].click(); // 2. i dont have subject knowledge
    var classes = document.getElementsByClassName("sc-jTzLTM gKItAZ sc-jqCOkK dlyfZV sc-uJMKN jkNSkS"); // 3. class containing btn1
    var btn1 = classes[0]; // 3. submit
    btn1.click();
}
else {
    alert("Extension can be used only chegg site.")
}

