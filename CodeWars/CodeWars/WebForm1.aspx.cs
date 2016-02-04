using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;
using System.Text.RegularExpressions;

namespace CodeWars
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {


            // lblOutput.Text = codeWars.Maskify("123456");
            //int[] a = { 1, 2, 3, 4 };
            //int[] b = { 9, 8, 7 };
            //lblOutput.Text = codeWars.CompoundArray(a, b).ToString();
            //int[] myInts = new int[] { 1, 1, 3, 3, 7, 2, 2, 2, 2 };

            //int[] myNewInts = codeWars.DeleteNth(myInts, 3);

            //foreach(int n in myNewInts)
            //{
            //    lblOutput.Text += n.ToString() + "<br/>";
            //}
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            //lblOutput.Text = codeWars.Maskify(txtInput.Text);
            lblOutput.Text = codeWars.DuplicateCount(txtInput.Text).ToString();

            //lblOutput.Text = answer[0].ToString() + " -- " + answer[1].ToString() + " -- time : " + t.ElapsedMilliseconds.ToString();
            
        }


    }
}