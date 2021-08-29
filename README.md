## Currenxie code test

Time limit: 4 hours

## Prerequisites:

- Make sure that you FORK this codesandbox project!
- Create an account on https://mockapi.io/
- Then use this link https://mockapi.io/clone/5f50b1862b5a260016e8bdcd to activate the mock on your account.

# Requirements and notes

- Use as much TypeScript as possible.
- All API requests must be made with a saga.
- All API data must be stored in redux.
- Getting data from redux should be done with containers.
- The submit button should have a loading and a disabled state while the API request is submitting.
- If there's any API error displayed, it should disappear for every new form submission.
- You are free to use any other npm packages that you find useful, or change the structure of the files/folders.
- The UI is not important (but see bonuses below).

# Scenario (imaginary)

We are creating an app where you can see your transactions, and make transfers to other people (beneficiaries). Portions of the app have already been created.
Here's what we want you do to:

1. You start on a page that lists all transactions. Hook up this list to show the data from the API.
2. Open the transfer modal to make a new transfer
3. Form should have user friendly validations
4. Populate the empty select field, with data from the beneficiary mock api
5. The beneficiary data gives you their supported currency. This value should populate the currency field
6. The modal should have 3 steps (Form, confirmation, and success)
7. When submitting the form, show a confirmation step with the data displayed, by clicking the continue button.
8. On the confirmation step, make the actual post request to an API when clicking the submit button.
   - 8.1. If successful, show the success step
   - 8.2 If successful, make sure the newly created transfer is added to the transaction list
   - 8.3. If unsuccessful, show a user friendly error (somewhere in the confirmation step). Tip: Temporarily change the endpoint to return a 400 or 500 error.

## Bonuses

If you have extra time;

- Typed reducers and actions.
- Try to make it look nice and add some extra styling of your choice :) If you do, it doesn't have to be made with Material-UI.

## Submission

By forking the sandbox, you will have your own URL that you can share.

Post it to the Slack channel.
