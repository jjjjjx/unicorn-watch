const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const unicornSightingsContractFactory = await hre.ethers.getContractFactory(
    'UnicornSightings'
  );
  const unicornSightingsContract =
    await unicornSightingsContractFactory.deploy();
  await unicornSightingsContract.deployed();

  console.log('Contract deployed to:', unicornSightingsContract.address);
  console.log('Contract deployed by:', owner.address);

  let unicornCount;
  unicornCount = await unicornSightingsContract.getTotalUnicornSightings();

  let unicornSightingTxn =
    await unicornSightingsContract.reportUnicornSighting();
  await unicornSightingTxn.wait();
  unicornCount = await unicornSightingsContract.getTotalUnicornSightings();

  unicornSightingTxn = await unicornSightingsContract
    .connect(randomPerson)
    .reportUnicornSighting();
  await unicornSightingTxn.wait();
  unicornCount = await unicornSightingsContract.getTotalUnicornSightings();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
