export interface Country {
  id: number;
  name: string;
  capital: string[] | null;
  currencies: Record<string, { name: string; symbol: string }> | null;
  region: string;
  languages: Record<string, any> | null;
  population: number;
  flags: string;
}
