// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(string) {
  if (string.length === 1) {
    return string;
  } else {
    return reverse(string.slice(1)) + string[0];
  }
}

reverse("awesome"); // 'emosewa'
reverse('rithmschool'); // 'loohcsmhtir'
