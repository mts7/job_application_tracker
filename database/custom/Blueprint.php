<?php

namespace database\custom;

use Illuminate\Database\Schema\Blueprint as BlueprintBase;
use Illuminate\Database\Schema\ColumnDefinition;
use Illuminate\Database\Schema\ForeignKeyDefinition;

class Blueprint extends BlueprintBase
{
	/**
	 * Uses the foreignId method to add a constraint and cascading updates and deletes.
	 *
	 * @param string $column
	 * @return \Illuminate\Database\Schema\ForeignKeyDefinition
	 */
	public function foreignCascade(string $column): ForeignKeyDefinition
	{
		return $this->foreignId($column)
			->constrained()
			->onDelete('cascade')
			->onUpdate('cascade');
	}

	/**
	 * Creates an unsigned (positive) integer.
	 *
	 * @param string $column
	 * @return \Illuminate\Database\Schema\ColumnDefinition
	 */
	public function positiveInteger(string $column): ColumnDefinition
	{
		return $this->integer($column)->unsigned();
	}

	/**
	 * Creates a UUID column as the primary key, defaulting to 'id' for the column name.
	 *
	 * @param string $column
	 * @return \Illuminate\Database\Schema\ColumnDefinition
	 */
	public function uuidPrimary(string $column = 'id'): ColumnDefinition
	{
		return $this->uuid($column)->primary();
	}
}
