import comparison from '@/data/comparison.json';

type FeatureTypes = {
  'Monthly fee': string;
  'Arranged overdraft available': boolean;
  'Up to 15% cashback on spending': boolean;
  'Included in £175 switching offer': boolean;
  'Interest on balances up to £5,000': boolean;
  'Preferential travel money rates': boolean;
  'Lifestyle benefits including Disney+': boolean;
  'Mobile phone insurance': boolean;
  'Family travel insurance': boolean | string;
  'AA breakdown family cover': boolean | string;
};
type ProductsType = Record<string, FeatureTypes>;
type ArrayType = (string | boolean)[];
type ArraysType = ArrayType[];
type ReturnType = {
  columns?: ArrayType;
  headers: ArrayType;
  tableData: ArraysType;
};

export function createColumns(data: ProductsType): ArrayType {
  const firstEntry = Object.values(data)[0];

  return Object.keys(firstEntry);
}

export function createHeaders(data: ProductsType): ArrayType {
  const headers = Object.keys(data);

  return ['Account features', ...headers];
}

export function createTable(): ReturnType {
  const { mnemonics } = comparison;
  const columns = createColumns(mnemonics);
  const headerRow = createHeaders(mnemonics);
  const table: ArraysType = [];

  for (const column of columns) {
    const row: ArrayType = [column];

    for (const mnemonic of headerRow.slice(1)) {
      row.push((mnemonics as ProductsType)[mnemonic as string][column as keyof FeatureTypes] ?? null);
    }

    table.push(row);
  }

  return {
    columns,
    headers: headerRow,
    tableData: table,
  };
}

export function createTableVertical(): ReturnType {
  const { mnemonics } = comparison;
  const headerRow = createHeaders(mnemonics);
  const table: ArraysType = [createColumns(mnemonics)];

  Object.values(mnemonics).forEach((entry) => {
    const arr: ArrayType = [];

    Object.values(entry).forEach((value) => arr.push(value));

    table.push(arr);
  });

  return {
    tableData: table,
    headers: headerRow,
  };
}
