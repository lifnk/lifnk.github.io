function calculateHash() {  
  // 获取输入文本和哈希值位数  
  var inputText = document.getElementById("inputText").value;  
  var bitSize = parseInt(document.getElementById("bitSize").value);  
  var hashBitSize = bitSize; // 将哈希值位数存储在变量中，用于后续输出处理  
  
  // 计算哈希值（使用SHA-256算法示例）  
  var hashValue;  
  try {  
    hashValue = crypto.subtle.digest("SHA-256", new TextEncoder().encode(inputText));  
  } catch (error) {  
    console.error("计算哈希值时发生错误:", error);  
    return;  
  }  
  var hashHex = Array.from(new Uint8Array(hashValue)).map(b => b.toString(16).padStart(2, "0")).join("");  
  var output = document.getElementById("output");  
  
  // 根据设定的数字决定输出哈希值的前几位  
  var outputHash = hashHex.substring(0, hashBitSize); // 假设输出哈希值的位数为hashBitSize，可根据需要进行调整  
  output.textContent = "哈希值: " + outputHash; // 显示在网页上，可根据需要进行调整和美化显示效果（使用CSS样式）  
}
