exports.resetPasswordTemplate = (name, resetLink) => {
  return `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f4f6fb;font-family:Arial">

<table width="100%">
<tr>
<td align="center">

<table width="600" style="background:white;border-radius:10px;padding:40px">

<tr>
<td align="center">
<img
src="https://raw.githubusercontent.com/Ujjwal092/Study-Notion-MERN/main/FrontEnd/src/assets/Logo/Logo-Full-Light.png"
width="160"
/>
</td>
</tr>

<tr>
<td align="center">
<h2>Password Reset Request</h2>
</td>
</tr>

<tr>
<td style="font-size:16px;color:#444">
Hello <b>${name}</b>,
</td>
</tr>

<tr>
<td style="font-size:15px;color:#555;padding-top:10px">
We received a request to reset your password.
</td>
</tr>

<tr>
<td align="center" style="padding:20px">
<a 
href="${resetLink}" 
style="
  background:#FFD60A;
  color:black;
  padding:12px 20px;
  text-decoration:none;
  border-radius:5px;
  font-weight:bold;
  display:inline-block;
">
Reset Password
</a>
</td>
</tr>

<tr>
<td style="font-size:14px;color:#777">
This link will expire in <b>1 hour</b>.
</td>
</tr>

<tr>
<td style="font-size:14px;color:#777;padding-top:10px">
If you did not request this, please ignore this email.
</td>
</tr>

<tr>
<td align="center" style="padding-top:30px;font-size:12px;color:#aaa">
StudyNotion Security Team
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};
