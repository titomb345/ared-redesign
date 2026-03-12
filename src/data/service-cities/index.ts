export type { CityData } from './types';
import type { CityData } from './types';
import { wylieTx } from './wylie-tx';
import { planoTx } from './plano-tx';
import { dallasTx } from './dallas-tx';
import { mckinneyTx } from './mckinney-tx';
import { allenTx } from './allen-tx';
import { friscoTx } from './frisco-tx';
import { richardsonTx } from './richardson-tx';
import { garlandTx } from './garland-tx';
import { rockwallTx } from './rockwall-tx';
import { fortWorthTx } from './fort-worth-tx';

export const serviceCities: CityData[] = [
  wylieTx,
  planoTx,
  dallasTx,
  mckinneyTx,
  allenTx,
  friscoTx,
  richardsonTx,
  garlandTx,
  rockwallTx,
  fortWorthTx,
];
