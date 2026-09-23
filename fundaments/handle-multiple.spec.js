import {test,expect} from "@playwright/test"


test.skip("Create New User",async ({page})=>
{

   // Open the login page, which also contains a link to the signup page.
   await page.goto("https://www.google.com/");

   //await page.getByLabel("Search").pressSequentially("Mukesh Otwani",{delay:100})

   await page.locator("//textarea[@title='Search']").fill("Mukesh Otwani")

   await page.waitForTimeout(2000)

   let total_elements=await page.locator("//ul[@role='listbox']/li").all()

   console.log(total_elements.length);

   for(let i=0;i<total_elements.length;i++)
   {

            let text=await total_elements.at(i).innerText()

            console.log(text);

            if(text.includes("javascript"))
            {
                console.log("Found desired element");
                
                await total_elements.at(i).click()

                break
            }
            
   }
   
   
})


test("Create New User Different",async ({page})=>
{

   // Open the login page, which also contains a link to the signup page.
   await page.goto("https://www.google.com/");

   //await page.getByLabel("Search").pressSequentially("Mukesh Otwani",{delay:100})

   await page.locator("//textarea[@title='Search']").pressSequentially("Mukesh Otwani",{delay:200})

   //await page.locator("//textarea[@title='Search']").fill("Mukesh Otwani")

   let all_elements=page.locator("//ul[@role='listbox']/li")

   let total_number=await page.locator("//ul[@role='listbox']/li").count()

   console.log(total_number);

   for(let i=0;i<total_number;i++)
   {

            let text=await all_elements.nth(i).innerText()

            console.log(text);

            if(text.includes("javascript"))
            {
                console.log("Found desired element");
                
                await all_elements.nth(i).click()

                break
            }
            
   }
   
   
})


test("Create New User With For Of",async ({page})=>
{

   // Open the login page, which also contains a link to the signup page.
   await page.goto("https://www.google.com/");

   //await page.getByLabel("Search").pressSequentially("Mukesh Otwani",{delay:100})

   await page.locator("//textarea[@title='Search']").pressSequentially("Mukesh Otwani",{delay:200})

   //await page.locator("//textarea[@title='Search']").fill("Mukesh Otwani")

   let all_elements=page.locator("//ul[@role='listbox']/li")

   let total_number=await page.locator("//ul[@role='listbox']/li").count()

   console.log(total_number);

   for (const element of all_elements) 
   {
    
        // try this logic
        // capture the text
        // put condition 
        // break
    
   }
   
   
})


