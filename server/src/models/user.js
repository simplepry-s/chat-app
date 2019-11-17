function getUser () {
  return `
    select * 
    from user 
    order by objectid desc
    `;
}

export default { getUser };
