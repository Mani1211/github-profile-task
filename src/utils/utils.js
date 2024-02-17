export const formatDate = (date) => {
    // Parse the input string into a Date object
    const inputDate = new Date(date);

    // Extract day, month, and year components
    let day = inputDate.getDate();
    let month = inputDate.getMonth() + 1; // Note: months are zero-based
    const year = inputDate.getFullYear();

    // Format the components with leading zeros if necessary
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    // Construct the desired format
    const outputDateString = day + "/" + month + "/" + year;

    return outputDateString;
    // Output the result
  };