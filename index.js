let user = {
    name: "Steve",
    email: "steve@modernjavascript.com",
    course: "Modern JavaScript"
  };
  
  function generateEmailText(name, email, course) {
    // [YOUR CODE GOES HERE]
  }
  
  console.log(generateEmailText(user.name, user.email, user.course));
  let user = {
    name: 'Steve',
    email: 'steve@modernjavascript.com',
    course: 'Modern JavaScript'
  }
  
  function generateEmailText(name, email, course) {
    const emailText = `
  สวัสดีค่ะ คุณ ${name}
  
  ยินดีต้อนรับเข้าสู่คอร์ส ${course} ของ สคูลดิโอ! สตูดิโอของคนอยากอัพสกิล
  กรุณากดปุ่มด้านล่างเพื่อยืนยันอีเมล ${email}
  
  ขอบคุณค่ะ ขอให้เรียนอย่างสนุกนะคะ
  ทีมงานสคูลดิโอ
  `
    return emailText
  }
  
  console.log(generateEmailText(user.name, user.email, user.course))  