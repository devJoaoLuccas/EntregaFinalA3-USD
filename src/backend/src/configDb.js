import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Função para criar o banco e fazer as conexões com ele nos outros arquivos

export async function openDb() {
  return open({
    filename: 'backend/database.db',
    driver: sqlite3.Database
  });

}