import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"
import { resolve } from "path";
import figlet from "figlet";



const sleep = () => {

    return new Promise((res) => {
        setTimeout((res), 2000);
    })

}
const atminterface = async () => {


    class Atm {
        clients: string[] = [];
        pin_codes: any[] = [];
    }

    let atm = new Atm;



    const makeAccount: any = await inquirer.prompt([{
        type: "input",
        name: "acount",
        message: "Enter You'r Name: "
    },
    {
        type: "input",
        name: "CNIC",
        message: "Enter you'r CNIC-NO" + chalk.blueBright(` (optional) `)+ ':', 

    },
    {
        type: "input",
        name: "pinAcountCreate",
        message: "Enter Strong pin Code: "

    },
    {
        type: "input",
        name: "pincodeConfim",
        message: " Again re-type pin code: "

    }])
        .then((answers) => {
            const usar = {
                nam: answers.acount,
                pin: answers.pinAcountCreate,
            };
            atm.clients.push(usar.nam);
            atm.pin_codes.push(usar.pin);
        });
    let process = chalkAnimation.karaoke("Processing.....")
    await sleep();
    process.stop();

    var loginPOP_UP = chalkAnimation.neon('--=> You successfully Sign in');
    await sleep();
    loginPOP_UP.stop();


    let wellcome = chalkAnimation.rainbow(figlet.textSync((`Bank Alfalah ATM`)) + (`(WellCome ${atm.clients.slice().pop()})`));
    await sleep()
    wellcome.stop();


    const confim = await inquirer.prompt([{
        type: "input",
        name: "Username",
        message: "Enter the user name:"
    }, {
        name: "password",
        type: "input",
        message: "Enter you Pin Code:"
    }])
    const { Username, password } = confim;
    if (confim.Username === atm.clients[atm.clients.lastIndexOf(Username)] && confim.password === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {


        let Operation = await inquirer.prompt([{
            name: "displayATM",
            type: "list",
            message: chalk.red("Select the option which you want to perform:"),
            choices: ["Cash Withdrawal", "Transfer", "Change card Sitting", 'Balance check', "Bill Payment"]
        }])

        const { displayATM } = Operation;

        if (displayATM === 'Transfer') {
            const Cash_Withdrawal = await inquirer.prompt([{
                type: "list",
                name: "cash",
                choices: ["Jazz Cash", "Paypal", "Easypaisa", "Bank Acount"],
                message: chalk.blue("Now select the Cash Withdrawal method: ")
            }])

            const cash = Cash_Withdrawal;
            if (Cash_Withdrawal.cash === 'Jazz Cash' || Cash_Withdrawal.cash === "Paypal" || Cash_Withdrawal.cash === "Easypaisa" || Cash_Withdrawal.cash === "Bank Acount") {
                const TsferCash = await inquirer.prompt([{
                    type: "input",
                    name: "acount",
                    message: "Enter the Account Number: "
                },
                {
                    type: "input",
                    name: "Money",
                    message: "Enter the Amount: "

                },
                {
                    type: "input",
                    name: "pincode",
                    message: "Enter you'r pin code: "

                }
                ]);
                const { Money, accout, pincode } = TsferCash
                if (pincode === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {

                    let trasec = chalkAnimation.rainbow("Transaction Successful");
                    await sleep();
                    trasec.stop();

                }
                else {

                    let trasecFail = chalkAnimation.neon(`\t"Transection Failed" '\n'\tPlz Enter Correct Password`)
                    await sleep();
                    trasecFail.stop()
                }
            }
        }
        else if (displayATM === "Cash Withdrawal") {
            const getmoney = await inquirer.prompt([{
                type: "input",
                name: "money",
                message: "Enter The Amount:",
            }, {
                type: "input",
                name: "pincode",
                message: "Enter your pin Code:",
            }
            ])
            const { money, pincode } = getmoney;

            if (pincode === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {
                let trasec = chalkAnimation.rainbow("Withdrawal Successful");
                await sleep();
                trasec.stop();
            }
            else {
                let trasecFail = chalkAnimation.neon(`\t"SORRY" '\n' Plz Enter Correct Pin code`)
                await sleep();
                trasecFail.stop()
            }
        }
        else if (displayATM === "Change card Sitting") {
            console.log(chalk.greenBright("PLZ contect Bank Manager to change Sitting"));

        }
        else if (displayATM === 'Balance check') {

            console.log(chalk.green(108009 + Math.random() + Math.random()));

        }
        else if (displayATM === "Bill Payment") {
            const a = await inquirer.prompt([{
                type: "list",
                name: "Bill",
                message: chalk.yellow("Select Bill Payment Mathod: "),
                choices: ["Utility Bill", "Electricity Bill", "Gass Bill", "University Fee"]
            }])
            if (a.Bill === 'Utility Bill' || a.Bill === 'Electricity Bill' || a.Bill === "Gass Bill" || a.Bill === "University Fee") {
                const paybill = await inquirer.prompt([

                    {
                        type: "input",
                        name: "billmoney",
                        message: "Enter The OTP Code of Bill/custum ID:",
                    }, {
                        type: "input",
                        name: "pincode",
                        message: "Enter your pin Code:",
                    }])

                const { billmoney, pincode } = paybill

                if (pincode === atm.pin_codes[atm.pin_codes.lastIndexOf(password)]) {
                    let confirmpin = chalkAnimation.rainbow(" Paid Successful");
                    await sleep();
                    confirmpin.stop();

                }
                else {
                    let trasecFail = chalkAnimation.neon(`\t"Bill Not Paid" \n   Plz Enter Correct Pin code`)
                    await sleep();
                    trasecFail.stop()
                }
            }
        }
    } else {
        let pinError = chalkAnimation.neon("Plz Enter Correct Pin Code ")
        await sleep();
        pinError.stop()
    }
}


export { atminterface, sleep }

