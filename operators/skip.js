const skip = count => from => to => {
  let skipped = 0;
  let ask;
  const listen = x => {
    if (skipped >= count) {
      to(x);
    } else {
      skipped++;
      ask('next');
    }
  }
  ask = from(listen);

  return ask;
}

module.exports = skip;
