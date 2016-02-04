<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="CodeWars.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/CodeWars.js"></script>
    <title></title>
</head>
<body>

    <form id="form1" runat="server">
    <div>
        <asp:TextBox runat="server" ID="txtInput"></asp:TextBox>
        <br />
        <asp:Button runat="server" id="btnSubmit" OnClick="btnSubmit_Click" />
        <br />
        <asp:Label runat="server" ID="lblOutput"></asp:Label>
    </div>
    </form>
</body>
</html>
