function calculateHash() {  
  // 获取输入文本和哈希值位数  
  var inputText = document.getElementById("inputText").value;  
  var hashBitSize = document.getElementById("hashBitSize").value;  
    
  // 计算哈希值（使用SHA-256算法示例）  
  var hashValue = crypto.subtle.digest("SHA-256", new TextEncoder().encode(inputText));  
  var hashHex = Array.from(new Uint8Array(hashValue)).map(b => b.toString(16).padStart(2, "0")).join("");  
    
  // 输出哈希值  
  document.getElementById("output").textContent = "Hash: " + hashHex.toUpperCase();  
}
