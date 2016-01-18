package com.loncoto.tdangularupload.dao;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import com.loncoto.tdangularupload.metier.IGenericEntity;

public interface IGenericDAO<T extends IGenericEntity> {

	// renvoie la liste des entite de type T
	List<T> findAll();

	// recupere une entite de type T
	T findByID(int id);

	T save(T entity);

	T remove(int id);

}