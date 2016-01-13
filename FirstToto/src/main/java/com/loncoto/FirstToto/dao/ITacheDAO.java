package com.loncoto.FirstToto.dao;

import java.util.List;

import com.loncoto.FirstToto.metier.Tache;

public interface ITacheDAO {
	public List<Tache> findAll();
	public Tache findById(int id);
}
