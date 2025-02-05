# Bridge Liquidity Pool (BLP) entre Ethereum et Tezos

## 📌 Description
Ce projet implémente un **Bridge Liquidity Pool** permettant de transférer des tokens ERC-20 sur Ethereum et de les convertir en tokens FA2 sur Tezos, et inversement. Il repose sur des **smart contracts** pour chaque blockchain et un **Relayer Off-chain** en Node.js pour synchroniser les transactions.

## 📂 Structure du Projet
```
Bridge-LiquidityPools/
│── BACKEND/               # Relayer Off-chain en Node.js
│   │── src/
│   │   │── controllers/   # Gestion des routes API
│   │   │── services/      # Interaction avec Ethereum & Tezos
│   │   │── abis/          # ABI des smart contracts
│   │── package.json       # Dépendances du backend
│   │── .env               # Variables d'environnement
│
│── CONTRACTS/             # Smart Contracts Ethereum & Tezos
│   │── src/
│   │   │── BencoToken.sol  # ERC-20 Token
│   │   │── BencoVault.sol  # Vault Ethereum
│   │   │── BencoFA2.ligo   # FA2 Token sur Tezos
│   │   │── BencoVaultFA2.ligo # Vault sur Tezos
│   │── out/               # Compilation Foundry (Ethereum)
│   │── forge.toml         # Configuration Foundry
│
│── SCRIPTS/               # Déploiement et tests
│   │── deploy_eth.s.sol   # Script de déploiement Ethereum
│   │── deploy_tez.ligo    # Script de déploiement Tezos
│
│── README.md              # Documentation du projet
```

## 🚀 Fonctionnalités
### 1️⃣ **Smart Contracts Ethereum**
- `BencoToken` : Un **ERC-20** permettant le mint et le burn de tokens.
- `BencoVault` : Un **Vault** permettant le dépôt et le retrait de tokens ERC-20.

### 2️⃣ **Smart Contracts Tezos**
- `BencoFA2` : Un **FA2 Token** sur Tezos, équivalent à ERC-20.
- `BencoVaultFA2` : Un **Vault** permettant le minting et le burning sur Tezos.

### 3️⃣ **Relayer Off-chain (Node.js)**
- **API REST** pour interagir avec Ethereum et Tezos.
- **Écoute des événements Ethereum** (`DepositInitiated`) et appelle **mint()** sur Tezos.
- **Écoute des événements Tezos** (`BurnEvent`) et appelle **withdraw()** sur Ethereum.

## 📌 Installation et Déploiement
### 1️⃣ **Cloner le projet**
```sh
git clone https://github.com/Bencooo/Bridge-LiquidityPools
cd Bridge-LiquidityPools
```

### 2️⃣ **Installer les dépendances (Node.js)**
```sh
cd BACKEND
npm install
```

### 3️⃣ **Démarrer un nœud local Ethereum avec Foundry**
```sh
anvil
```

### 4️⃣ **Déployer les smart contracts Ethereum (Foundry)**
```sh
forge script script/deploy_eth.s.sol --rpc-url http://127.0.0.1:8545 --broadcast
```

### 5️⃣ **Démarrer le backend**
```sh
npm run dev
```

### 6️⃣ **Tester l'API (Exemple : Dépôt de tokens)**
```sh
POST http://localhost:3005/api/ethereum/deposit/0xYourWalletAddress/10
```

## 📌 Technologies Utilisées
- **Ethereum** (Solidity, Foundry, ethers.js v6)
- **Tezos** (Ligo, Taquito)
- **Node.js** (Express.js, ethers.js, @taquito/taquito)
- **Foundry** (Déploiement Ethereum)

## 📌 Prochaines Étapes
- 🔹 Finalisation du **contrat FA2 sur Tezos**.
- 🔹 Implémentation complète du **Relayer Off-chain**.
- 🔹 Tests et optimisation des transactions.

---
✍️ **Auteur : Aymen Bentalha** | 🔗 **Contact : [GitHub](https://github.com/Bencooo/Bridge-LiquidityPools)**
