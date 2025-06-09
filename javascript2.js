// JavaScript แสดงข้อความต้อนรับ
    const name = prompt("กรุณากรอกชื่อของคุณ:");
    const welcomeText = name ? `สวัสดีคุณ ${name} ยินดีต้อนรับสู่เว็บไซต์ของเรา!` : "ยินดีต้อนรับผู้เยี่ยมชม!";
    document.getElementById("welcomeMessage").textContent = welcomeText;