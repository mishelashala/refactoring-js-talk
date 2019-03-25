// original
function printOwing(invoice) {
  let oustanding = calculateOutstanding();

  // print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

// refactor

function printOwing(invoice) {
  let outstanding = calculateOutstanding();
  printDetails(outstanding);

  function printDetails(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}

// even more refactor

// printDetails :: IInvoice -> ()
const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleString()}`);
};

// printOwing :: IInvoice -> ()
const printOwing = invoice => {
  const outstanding = calculateOutstanding();
  printDetails(invoice, outstanding);
};
